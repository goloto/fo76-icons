import { sortArrayExpression } from '@/ast-utils/sort-rules';

export const sortRules = async () => {
  const file = await Bun.file('./src/rules/aid.ts').text();
  const sortedFile = sortArrayExpression(file);

  await Bun.write('./src/rules/aid_sorted.ts', sortedFile);
};
