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

  });

  describe ('startCountdown', () => {

  });

  describe ('render', () => {

  });

});
