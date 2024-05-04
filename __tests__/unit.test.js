// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

// Phone Number ----------------------------------------------------------------------------
test('phone is in right format', () => {
  expect(isPhoneNumber("(510) 123-5799")).toBe(true);
});

test('phone is in right format but with parentheses', () => {
  expect(isPhoneNumber("(510) 123-5799")).toBe(true);
});

test('phone number is text', () => {
  expect(isPhoneNumber("blahblahblobfish")).toBe(false);
});

test('phone number is empty', () => {
  expect(isPhoneNumber("")).toBe(false);
});

// Email ------------------------------------------------------------------------------------
test('email is in right format', () => {
  expect(isEmail("blah@gmail.com")).toBe(true);
});

test('email is not gmail', () => {
  expect(isEmail("blah@yahoo.com")).toBe(true);
});

test('email has no @', () => {
  expect(isEmail("blahblahblobfish")).toBe(false);
});

test('email is empty', () => {
  expect(isEmail("")).toBe(false);
});

// Strong Password --------------------------------------------------------------------------
test('password has many different characters', () => {
  expect(isStrongPassword("Aa452Bbb")).toBe(true);
});

test('password has all caps and numbers', () => {
  expect(isStrongPassword("ABC123")).toBe(true);
});

test('password has no numbers', () => {
  expect(isStrongPassword("blahblahblobfish")).toBe(false);
});

test('password is empty', () => {
  expect(isStrongPassword("")).toBe(false);
});

// Date -------------------------------------------------------------------------------------
test('date is in M/D/YYYY format', () => {
  expect(isDate("1/1/2002")).toBe(true);
});

test('date is in MM/DD/YYYY format', () => {
  expect(isDate("12/3/2992")).toBe(true);
});

test('date has no numbers', () => {
  expect(isDate("blahblahblobfish")).toBe(false);
});

test('date is empty', () => {
  expect(isDate("")).toBe(false);
});

// Hex Color -------------------------------------------------------------------------------
test('3 character hex code', () => {
  expect(isHexColor("#123")).toBe(true);
});

test('6 character hex code', () => {
  expect(isHexColor("#FFFFFF")).toBe(true);
});

test('hex code is 1 character long', () => {
  expect(isHexColor("1")).toBe(false);
});

test('hex code is empty', () => {
  expect(isHexColor("")).toBe(false);
});