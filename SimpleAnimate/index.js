import React from 'react';
import './assets/animate.css';

// index 会渐现
// test 会渐隐，消失后不会保留交互性
export default Demo = () => (
  <>
    <div className="animate-appear">index</div>
    <div className="box">test</div>
  </>
);
