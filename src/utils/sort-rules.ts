import { sortArrayExpression } from '@/ast-utils/sort-rules';
import { RULES_DIRECTORY } from '@/constants';
import { readdir } from 'node:fs/promises';

export const sortRules = async () => {
  const ruleFiles = await readdir(RULES_DIRECTORY);

  for (const filePath of ruleFiles) {
    console.log(filePath);
    const file = await Bun.file(`${RULES_DIRECTORY}/${filePath}`).text();

    try {
      const sortedFile = sortArrayExpression(file);

      await Bun.write(`${RULES_DIRECTORY}/${filePath}`, sortedFile);
    } catch {
      throw new Error(`Error while sorting ${filePath}`);
    }
  }
};
