const CURRENCY = 'USD';
const NAME_LENGTH = 22;
const NUMBERS_LENGTH = 5;
const MULTIPLY = ' x ';
const EQUALS = ' = ';

function pad(string, max) {
  return string + ' '.repeat(max - String(string).length);
}

function leftPad(string, max) {
  return ' '.repeat(max - String(string).length) + string;
}

function createRow(item) {
  return [
    pad(item.name, NAME_LENGTH),
    leftPad(item.quantity, NUMBERS_LENGTH),
    MULTIPLY,
    leftPad(item.price.toFixed(2), NUMBERS_LENGTH),
    EQUALS,
    leftPad(item.sum.toFixed(2), NUMBERS_LENGTH),
    ` ${CURRENCY}`,
  ].join('');
}

function createSummaryRow(title, amount) {
  return [
    pad(title, NAME_LENGTH),
    ' '.repeat(NUMBERS_LENGTH * 2 + MULTIPLY.length + EQUALS.length),
    leftPad(amount.toFixed(2), NUMBERS_LENGTH),
    ` ${CURRENCY}`,
  ].join('');
}

export function printLineItems(items) {
  console.log('\n\n\nItems:\n');

  items.forEach(
    item => console.log(createRow(item))
  );

  console.log(`\n${'-'.repeat(createSummaryRow('', 0).length)}\n`);
}

export function printSummary(total) {
  console.log(createSummaryRow('Sum:', total.sum));
  console.log(createSummaryRow('Discount:', -total.discount));
  console.log(createSummaryRow('Total:', total.total));

  console.log('\n\nThank you.\n\n');
}
