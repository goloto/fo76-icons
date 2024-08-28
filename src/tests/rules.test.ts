import { describe, test, expect } from 'bun:test';

describe('Testing all rules with snapshots', () => {
  test('Testing WEAP rules', async () => {
    const weaponsXml = Bun.file('./src/tests/rules-xml/WEAP.xml');
    const weaponsString = await weaponsXml.text();

    expect(weaponsString).toMatchSnapshot();
  });

  test('Testing ALCH rules', async () => {
    const alchemyXml = Bun.file('./src/tests/rules-xml/ALCH.xml');
    const alchemyString = await alchemyXml.text();

    expect(alchemyString).toMatchSnapshot();
  });

  test('Testing MISC rules', async () => {
    const miscXml = Bun.file('./src/tests/rules-xml/MISC.xml');
    const miscString = await miscXml.text();

    expect(miscString).toMatchSnapshot();
  });

  test('Testing ARMO rules', async () => {
    const armorXml = Bun.file('./src/tests/rules-xml/ARMO.xml');
    const armorString = await armorXml.text();

    expect(armorString).toMatchSnapshot();
  });
});
