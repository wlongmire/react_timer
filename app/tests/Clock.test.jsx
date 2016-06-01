var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualSeconds = $el.find(".clock-text").text();

      expect(actualSeconds).toBe("01:02");
    });
  });

  describe('formatSeconds', () => {
    it('should format seconds', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var input = 615;
      var expected = '10:15';
      var actual = clock.formatSeconds(input);

      expect(actual).toBe(expected);
    });

    it('should format seconds with zero padding', () => {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var input = 61;
      var expected = '01:01';
      var actual = clock.formatSeconds(input);

      expect(actual).toBe(expected);
    });
  });
});
