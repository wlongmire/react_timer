const React = require("react");
const ReactDom = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const TimerPage = require('TimerPage');

describe('TimerPage', () => {
  it ('should exist', ()=> {
    expect(TimerPage).toExist();
  });

  // describe ('getInitialState', () => {
  //   it('should set initial count to initialCount prop', () => {
  //     const timer = TestUtils.renderIntoDocument(<TimerPage initialCount={10}/>);
  //     expect(timer.state.count).toBe(10);
  //   });
  // });

  describe('handleStatusChange', () => {
    it ('should increment and stop when paused', (done) => {
      const timer = TestUtils.renderIntoDocument(<TimerPage />);
      timer.handleStatusChange("started");
      setTimeout( () => {
        timer.handleStatusChange("paused");
        expect(timer.state.count).toBe(1);
        expect(timer.state.countdownStatus).toBe('paused');
        done();
      }, 1001);
    });

    it ('should reset when stopped', (done) => {
      const timer = TestUtils.renderIntoDocument(<TimerPage />);
      timer.handleStatusChange("started");

      setTimeout( () => {
        timer.handleStatusChange("stopped");
        expect(timer.state.count).toBe(0);
        expect(timer.state.countdownStatus).toBe('stopped');
        done();
      }, 1001);
    });

    // it ('should not increment passed 99 minutes', (done) => {
    //   const timer = TestUtils.renderIntoDocument(<TimerPage initialCount={ 6007 }/>);
    //   timer.handleStatusChange("started");
    //
    //   setTimeout( () => {
    //     expect(timer.state.count).toBe(6008);
    //     expect(timer.state.countdownStatus).toBe("started");
    //     done();
    //   }, 2001);
    // });

  });

});
