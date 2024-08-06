import { sortArrayExpression } from '@/ast-utils/sort-rules';

const file = await Bun.file('./rules/aid.ts').text();
const sortedFile = sortArrayExpression(file);

await Bun.write('./rules/aid_sorted.ts', sortedFile);
