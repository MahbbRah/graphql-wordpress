// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { formField } from '@wonderboymusic/graphql-wordpress-components';
import {
  EditForm,
  SubmitButton,
  EditCancelButton,
} from '@wonderboymusic/graphql-wordpress-components/lib/Comments';
import UpdateCommentMutation from 'mutations/UpdateComment';
import type { RelayContext } from 'react-relay';
import type { Comment } from 'relay-wordpress';

type EditCommentProps = {
  comment: Comment,
  token: string,
  onEditSubmit: () => void,
};

type EditCommentState = {
  content: string,
};

export default class Edit extends React.Component<EditCommentProps, EditCommentState> {
  static contextTypes = {
    relay: PropTypes.object,
  };

  static defaultProps = {
    onEditSubmit: () => null,
  };

  constructor(props: EditCommentProps, context: { relay: RelayContext }) {
    super(props, context);

    this.state = {
      content: props.comment.content.raw,
    };
  }

  onEdit = (e: Event) => {
    e.preventDefault();

    this.props.onEditSubmit();

    const variables = {
      input: {
        id: this.props.comment.id,
        content: this.state.content,
        token: this.props.token,
      },
    };

    UpdateCommentMutation.commit(this.context.relay.environment, variables, this.props.comment);
  };

  onChange = (e: Event & { target: HTMLInputElement }) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <EditForm onSubmit={e => e.preventDefault()}>
        <textarea
          className={formField}
          rows="6"
          name="content"
          value={this.state.content}
          onChange={this.onChange}
        />
        <SubmitButton type="submit" onClick={this.onEdit}>
          Submit
        </SubmitButton>
        <EditCancelButton type="reset" onClick={this.props.onEditSubmit}>
          Cancel
        </EditCancelButton>
      </EditForm>
    );
  }
}
