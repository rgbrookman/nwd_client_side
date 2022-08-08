import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { listDays } from '../../../actions/dayActions';
import * as d3 from 'd3';
import './ta.css';

const TasksAttemptedAverage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
	const d3Chart2 = useRef();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dayList = useSelector((state) => state.dayList);
  const { loading, error, days } = dayList;

	const parseDate = d3.timeParse('%Y-%m-%d')




  //Data Transformations
  days && days.forEach(day => {
    let count = (day.momentOneScore / day.momentOneScore === 1 ? 1 : 0) + (day.momentTwoScore / day.momentTwoScore === 1 ? 1 : 0) + (day.momentThreeScore / day.momentThreeScore === 1 ? 1 : 0) + (day.momentFourScore / day.momentFourScore === 1 ? 1 : 0) + (day.momentFiveScore / day.momentFiveScore === 1 ? 1 : 0);
    day.tasksAttempted = count;
  });

  //Getting Dates
    const tasksAttemptedData = days && days.map(each => {
      return {date: parseDate(each.logDate.slice(0,10)), ta: each.tasksAttempted}});
        console.log(tasksAttemptedData);

    const taDataFinal = tasksAttemptedData.sort((a,b) => a.date - b.date);


const avgArray = [];

taDataFinal && taDataFinal.map(each => avgArray.push(each.ta));


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

export default TasksAttemptedAverage;
