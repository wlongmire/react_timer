const React = require("react");
const ReactDom = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const CountdownPage = require('CountdownPage');

describe ('CountdownPage', () => {
  it ('should exist', () => {
    expect(CountdownPage).toExist();
  });

  describe ('handleSetCountdown', () => {

    it('should set state to started and countdown', (done) => {
      const countdown = TestUtils.renderIntoDocument(<CountdownPage />);
      countdown.handleSetCountdown(10);

      expect(countdown.state.count).toBe(10);
      expect(countdown.state.countdownStatus).toBe("started");
      setTimeout(()=> {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
    });

    it ('should never set count to a negative number', (done) => {
      const countdown = TestUtils.renderIntoDocument(<CountdownPage />);
      countdown.handleSetCountdown(1);

      setTimeout(()=> {
        expect(countdown.state.count).toBeGreaterThanOrEqualTo(0);
        done();
      }, 3001);
    });

    it ('should pause countdown on paused status', (done) => {
      const countdown = TestUtils.renderIntoDocument(<CountdownPage/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('paused');

      setTimeout(() => {
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done()
      }, 1001);
    });

    it('should reset count and be stopped on stopped status', (done)=> {
      const countdown = TestUtils.renderIntoDocument(<CountdownPage/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('stopped');

      expect(countdown.state.count).toBe(0);
      expect(countdown.state.countdownStatus).toBe('stopped');
      done();
    });
  });

});
