import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { listDays } from '../../../actions/dayActions';
import * as d3 from 'd3';
import './tc.css';

const TasksCompleted = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
	const d3Chart1 = useRef();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dayList = useSelector((state) => state.dayList);
  const { loading, error, days } = dayList;

	const parseDate = d3.timeParse('%Y-%m-%d')

const getDataTransform = () => {

  days && days.forEach(day => {
    let sum = (day.momentOneScore / 10) + (day.momentTwoScore / 10) + (day.momentThreeScore / 10) + (day.momentFourScore / 10) + (day.momentFiveScore / 10);
    day.total = sum;
  });

  const tasksCompletedData = days && days.map(each => {
    return {date: parseDate(each.logDate.slice(0,10)), total: each.total}});

  const tcDataFinal = tasksCompletedData.sort((a,b) => a.date - b.date);
  return tcDataFinal;


};







  useEffect(() => {
let tcData = getDataTransform();

        const margin = {top: 20, right: 30, bottom: 30, left: 30}
        const width = parseInt(d3.select('#d3demo5').style('width')) - margin.left - margin.right
        const height = parseInt(d3.select('#d3demo5').style('height')) - margin.top - margin.bottom

        // Set up chart
        const svg = d3.select(d3Chart1.current)
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                  .attr('transform', 'translate('+ margin.left + ',' + margin.top + ')');

        // x axis scale
        const x = d3.scaleTime()
              .domain(d3.extent(tcData, function(d){return d.date}))
              .range([0,width])

        svg.append('g')
          .attr('transform', 'translate(0,' + height + ')')
          .call(d3.axisBottom(x))

        // Get the max value of counts
        const max = d3.max(tcData, function(d){return d.total})

        // y axis scale
        const y = d3.scaleLinear()
              .domain([0, max])
              .range([height,0])

        svg.append('g')
          .call(d3.axisLeft(y))

        // Draw line
        svg.append('path')
          .datum(tcData)
          .attr('fill', 'none')
          .attr('stroke','white')
          .attr('stroke-width', 5)
          .attr('d', d3.line()
                .x(function(d){return x(d.date)})
                .y(function(d){return y(d.total)})
            )

  }, []);

	return (
		<div id='d3demo5'>
      <svg ref={d3Chart1}></svg>
		</div>
	)
}

export default TasksCompleted;
