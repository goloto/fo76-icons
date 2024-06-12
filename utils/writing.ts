export const writeJson = async (path: string, value: any) => {
  await Bun.write(path, JSON.stringify(value, null, '\t'));
}