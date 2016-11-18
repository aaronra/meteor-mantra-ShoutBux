const {describe, it} = global;
import {expect} from 'chai';
import {spy, stub} from 'sinon';
import actions from '../shout';

describe('shouts.actions.shout', () => {

  describe('postShout', () => {
    it('should clear older LocalState for SHOUT_ERROR', () => {
      const Meteor = {uuid: spy(), call: spy()};
      const LocalState = {set: spy()};
      const FlowRouter = {go: spy()};

      actions.postShout({LocalState, Meteor, FlowRouter}, 'shout');
      expect(LocalState.set.args[0]).to.deep.equal(['SHOUT_ERROR', null]);
    });
    it('should reject if shout is not there', () => {
      const LocalState = {set: spy()};
      actions.postShout({LocalState}, null);
      const args = LocalState.set.args[0];
      expect(args[0]).to.be.equal('SHOUT_ERROR');
    });
  });
  describe('updateShout', () => {
    it('should clear older LocalState for SHOUT_ERROR', () => {
      const Meteor = {uuid: spy(), call: spy()};
      const LocalState = {set: spy()};
      const FlowRouter = {go: spy()};
      actions.updateShout({LocalState, Meteor, FlowRouter}, 'shout');
      expect(LocalState.set.args[0]).to.deep.equal(['SHOUT_ERROR', null]);
    });
  });
  describe('deleteShout', () => {
    it('should clear older LocalState for SHOUT_ERROR', () => {
      const Meteor = {uuid: spy(), call: spy()};
      const LocalState = {set: spy()};
      const FlowRouter = {go: spy()};
      actions.deleteShout({LocalState, Meteor, FlowRouter}, 'shout');
      expect(LocalState.set.args[0]).to.deep.equal(['SHOUT_ERROR', null]);
    });
  });
});

