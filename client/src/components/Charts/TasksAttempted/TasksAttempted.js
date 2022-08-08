import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { listDays } from '../../../actions/dayActions';
import * as d3 from 'd3';
import './ta.css';

const TasksAttempted = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
	const d3Chart2 = useRef();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dayList = useSelector((state) => state.dayList);
  const { loading, error, days } = dayList;

	const parseDate = d3.timeParse('%Y-%m-%d')

  useEffect(() => {

  //Data Transformations
  days && days.forEach(day => {
    let count = (day.momentOneScore / day.momentOneScore === 1 || day.momentOneScore === 0 ? 1 : 0) + (day.momentTwoScore / day.momentTwoScore === 1 || day.momentTwoScore === 0  ? 1 : 0) + (day.momentThreeScore / day.momentThreeScore === 1 || day.momentThreeScore === 0 ? 1 : 0) + (day.momentFourScore / day.momentFourScore === 1 || day.momentFourScore === 0 ? 1 : 0) + (day.momentFiveScore / day.momentFiveScore === 1 || day.momentFiveScore === 0 ? 1 : 0);
    day.tasksAttempted = count;
  });

  //Getting Dates
    const tasksAttemptedData = days && days.map(each => {
      return {date: parseDate(each.logDate.slice(0,10)), ta: each.tasksAttempted}});


    const taDataFinal = tasksAttemptedData.sort((a,b) => a.date - b.date);



  //Getting

        const margin = {top: 20, right: 30, bottom: 30, left: 30}
        const width = parseInt(d3.select('#d3demo2').style('width')) - margin.left - margin.right
        const height = parseInt(d3.select('#d3demo2').style('height')) - margin.top - margin.bottom

        // Set up chart
        const svg = d3.select(d3Chart2.current)
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                  .attr('transform', 'translate('+ margin.left + ',' + margin.top + ')');

        // x axis scale
        const x = d3.scaleTime()
              .domain(d3.extent(taDataFinal, function(d){return d.date}))
              .range([0,width])

        svg.append('g')
          .attr('transform', 'translate(0,' + height + ')')
          .call(d3.axisBottom(x))

        // Get the max value of counts
        const max = d3.max(taDataFinal, function(d){return d.ta})

        // y axis scale
        const y = d3.scaleLinear()
              .domain([0, max])
              .range([height,0])

        svg.append('g')
          .call(d3.axisLeft(y))

        // Draw line
        svg.append('path')
          .datum(taDataFinal)
          .attr('fill', 'none')
          .attr('stroke','white')
          .attr('stroke-width', 5)
          .attr('d', d3.line()
                .x(function(d){return x(d.date)})
                .y(function(d){return y(d.ta)})
            )

  }, []);

	return (
		<div id='d3demo2'>
      <svg ref={d3Chart2}></svg>
		</div>
	)
}

export default TasksAttempted;
