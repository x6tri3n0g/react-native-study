// 여기서는 timer에 대한 state와 redux 작업을 합니다.

import { connect } from "react-redux"; // connect: 컴포넌트를 store에 연결하는 것을 도와줌
import Timer from "./Presenter";

function mapStateToProps(state) {
  const { isPlaying, elapsedTime, timerDuration } = state;
  return {
    isPlaying,
    elapsedTime,
    timerDuration
  };
}

export default connect(mapStateToProps)(Timer);
