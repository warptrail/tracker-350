import styled from 'styled-components';

export const BarGraph = styled.div`
  width: ${({ percent }) => percent || 0}%;
  height: 20px;
  background-color: #b638c6;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 5s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`;
export const GraphContainer = styled.div`
  width: 90%;
  height: 100%auto;
  border: 3px solid #b638c6;
  display: flex;
  margin: 5px 12px 10px 10px;
  background: #2c3332;
`;
