import { sortArrayExpression } from '@/ast-utils/sort-rules';

const file = await Bun.file('./src/constants/categories-order.ts').text();
const sortedFile = sortArrayExpression(file);

await Bun.write('./src/constants/categories-order.ts', sortedFile);
