/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type ContentNode_content_data = {|
  +__typename: "Text";
  +text: ?string;
|} | {|
  +__typename: "Element";
  +tagName: ?string;
|} | {|
  // This will never be '%other', but we need some
  // value in case none of the concrete values match.
  +__typename: "%other";
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ContentNode_content_data",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "__typename",
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "type": "Element",
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "tagName",
          "storageKey": null
        },
        {
          "kind": "FragmentSpread",
          "name": "Element_node",
          "args": null
        }
      ]
    },
    {
      "kind": "InlineFragment",
      "type": "Text",
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "args": null,
          "name": "text",
          "storageKey": null
        }
      ]
    },
    {
      "kind": "InlineFragment",
      "type": "Embed",
      "selections": [
        {
          "kind": "FragmentSpread",
          "name": "Embed_node",
          "args": null
        }
      ]
    }
  ],
  "type": "ContentNode"
};

module.exports = fragment;
