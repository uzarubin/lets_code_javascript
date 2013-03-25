// Copyright (c) 2013 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.
/*global describe, it, expect, beforeEach, wwp, $ */

(function() {
	"use strict";


	describe("DomElement", function() {
		var domElement;

		beforeEach(function() {
			domElement = new wwp.DomElement($("<div></div>"));
		});

		it("handles mouse events", function() {
			testEvent(domElement.onSelectStart_ie8Only, domElement.doSelectStart);
			testEvent(domElement.onMouseDown, domElement.doMouseDown);
			testEvent(domElement.onMouseMove, domElement.doMouseMove);
			testEvent(domElement.onMouseLeave, domElement.doMouseLeave);
			testEvent(domElement.onMouseUp, domElement.doMouseUp);
		});

		it("handles touch events", function() {
//				testEvent(domElement.onSingleTouchStart, domElement.doSingleTouchStart);
//				testEvent(domElement.onSingleTouchMove, domElement.doSingleTouchMove);
//				testEvent(domElement.onSingleTouchEnd, domElement.doSingleTouchEnd);
//				testEvent(domElement.onSingleTouchCancel, domElement.doSingleTouchEnd);
		});

		function testEvent(eventSender, eventHandler) {
			var eventOffset = null;
			eventSender.call(domElement, function(offset) {
				eventOffset = offset;
			});
			eventHandler.call(domElement, 42, 13);
			expect(eventOffset).to.eql({ x: 42, y: 13});
		}


	});

}());