import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { listDays } from '../../../actions/dayActions';
import * as d3 from 'd3';
import './tcr.css';

const TasksCompletionRate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
	const d3Chart3 = useRef();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dayList = useSelector((state) => state.dayList);
  const { loading, error, days } = dayList;

	const parseDate = d3.timeParse('%Y-%m-%d')



  days && days.forEach(day => {
    let sum = day.momentOneScore + day.momentTwoScore + day.momentThreeScore + day.momentFourScore + day.momentFiveScore;
    day.total = sum;

    let count = (day.momentOneScore / day.momentOneScore === 1 ? 1 : 0) + (day.momentTwoScore / day.momentTwoScore === 1 ? 1 : 0) + (day.momentThreeScore / day.momentThreeScore === 1 ? 1 : 0) + (day.momentFourScore / day.momentFourScore === 1 ? 1 : 0) + (day.momentFiveScore / day.momentFiveScore === 1 ? 1 : 0);
    day.tasksAttempted = count;

    let tcr = ((day.total / 10) / day.tasksAttempted)
      day.taskCompletionRate = tcr;
  });

  const avgArray = [];

  days && days.map(each => avgArray.push(each.taskCompletionRate));

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

  const avg = Math.round(d3.mean(avgArray) * 10) / 10 * 100 + "%";

	return (
	<span className="statSpan">{avg}</span>
	)
}

export default TasksCompletionRate;
