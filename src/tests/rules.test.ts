import { describe, test, expect } from 'bun:test';

describe('Testing all rules with snapshots', () => {
  test('Testing ALCH:FULL rules', async () => {
    const alchemyXml = Bun.file('./src/tests/rules-xml/ALCH:FULL.xml');
    const alchemyString = await alchemyXml.text();

    expect(alchemyString).toMatchSnapshot();
  });

  test('Testing AMMO:FULL rules', async () => {
    const ammunitionXml = Bun.file('./src/tests/rules-xml/AMMO:FULL.xml');
    const ammunitionString = await ammunitionXml.text();

    expect(ammunitionString).toMatchSnapshot();
  });

  test('Testing ARMO:FULL rules', async () => {
    const armorXml = Bun.file('./src/tests/rules-xml/ARMO:FULL.xml');
    const armorString = await armorXml.text();

    expect(armorString).toMatchSnapshot();
  });

  test('Testing BOOK:FULL rules', async () => {
    const bookXml = Bun.file('./src/tests/rules-xml/BOOK:FULL.xml');
    const bookString = await bookXml.text();

    expect(bookString).toMatchSnapshot();
  });

  test('Testing INNR:WNAM rules', async () => {
    const innrXml = Bun.file('./src/tests/rules-xml/INNR:WNAM.xml');
    const innrString = await innrXml.text();

    expect(innrString).toMatchSnapshot();
  });

  test('Testing KEYM:FULL rules', async () => {
    const keysXml = Bun.file('./src/tests/rules-xml/KEYM:FULL.xml');
    const keysString = await keysXml.text();

    expect(keysString).toMatchSnapshot();
  });

  test('Testing MISC:FULL rules', async () => {
    const miscXml = Bun.file('./src/tests/rules-xml/MISC:FULL.xml');
    const miscString = await miscXml.text();

    expect(miscString).toMatchSnapshot();
  });

  test('Testing WEAP:FULL rules', async () => {
    const weaponsXml = Bun.file('./src/tests/rules-xml/WEAP:FULL.xml');
    const weaponsString = await weaponsXml.text();

    expect(weaponsString).toMatchSnapshot();
  });
});
