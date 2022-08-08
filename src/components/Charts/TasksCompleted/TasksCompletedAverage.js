import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { listDays } from '../../../actions/dayActions';
import * as d3 from 'd3';
import './tc.css';

const TasksCompletedAverage = () => {
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


  let tcData = getDataTransform();


const avgArray = [];

tcData && tcData.map(each => avgArray.push(each.total));

const zeroRemove = () => {
  let lastItem = avgArray.length - 1;

  if (avgArray[lastItem] === 0) {
    return avgArray.pop();
  } else {
    return avgArray;
  }
}

zeroRemove();
console.log(avgArray);
    const avg = Math.round(d3.mean(avgArray) * 10) / 10;







	return (
	<span className="statSpan">{avg}</span>
	)
}

export default TasksCompletedAverage;
