import React, { useEffect, useRef, useLayoutEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { listDays } from '../../../actions/dayActions';
import * as d3 from 'd3';
import './feelingscorechart.css';

export default function FeelingScoreTrend({ history }) {
const [data, setData] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dayList = useSelector((state) => state.dayList);
  const { loading, error, days } = dayList;

//Load in Insight Page
	const parseDate = d3.timeParse('%Y-%m-%d')

const avgArray = [];


    days && days.map(each => avgArray.push(each.endScore));


const zeroRemove = () => {
  let lastItem = avgArray.length - 1;

  if (avgArray[lastItem] === 0) {
    return avgArray.pop();
  } else {
    return avgArray;
  }
}

zeroRemove();

    const deviation = Math.round(d3.deviation(avgArray)* 10) / 10;

	return (

			<span>{deviation}</span>


	)
}
