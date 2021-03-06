const PREFIX = 'arrayconnection:';

// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding

// first we use encodeURIComponent to get percent-encoded UTF-8,
// then we convert the percent encodings into raw bytes which
// can be fed into btoa.
function base64EncodeUnicode(str) {
  return btoa(
    encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) =>
      String.fromCharCode(`0x${p1}`)
    )
  );
}

// Going backwards: from bytestream, to percent-encoding, to original string.
function base64DecodeUnicode(str) {
  return decodeURIComponent(
    atob(str)
      .split('')
      .map(c => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join('')
  );
}

export function cursorToOffset(cursor) {
  return parseInt(base64DecodeUnicode(cursor).substring(PREFIX.length), 10);
}

export function offsetToCursor(offset) {
  return base64EncodeUnicode(PREFIX + offset);
}
