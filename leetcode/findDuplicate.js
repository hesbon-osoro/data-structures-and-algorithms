/*
Find Duplicate File in System (Medium)
Given a list paths of directory info, including the directory path, and all the files with contents in this directory, return all the duplicate files in the file system in terms of their paths. You may return the answer in any order.
*/
/**
 * @param {string[]} paths
 * @return {string[][]}
 */
const findDuplicate = function (paths) {
  const hashMap = {};
  const result = [];
  for (const path of paths) {
    const [root, ...files] = path.split(' ');
    for (const file of files) {
      const [fileName, content] = file.split('(');
      if (hashMap[content]) {
        hashMap[content].push(`${root}/${fileName}`);
      } else {
        hashMap[content] = [`${root}/${fileName}`];
      }
    }
  }
  for (const key in hashMap) {
    if (hashMap[key].length > 1) {
      result.push(hashMap[key]);
    }
  }
  return result;
};
console.log(
  findDuplicate([
    'root/a 1.txt(abcd) 2.txt(efgh)',
    'root/c 3.txt(abcd)',
    'root/c/d 4.txt(efgh)',
    'root 4.txt(efgh)',
  ])
);
