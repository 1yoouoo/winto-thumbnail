export function printTemplates(scoredTemplates: any[]) {
  console.log("🌟🌟🌟🌟🌟  템플릿 이름, 점수  🌟🌟🌟🌟🌟");

  scoredTemplates.forEach((template) => {
    const nameString = `name: '${template.name}'`.padEnd(35, " ");
    const scoreString = `score: ${template.score}`.padEnd(35, " ");
    console.log(`  ╔═════════════════════════════════════╗`);
    console.log(`  ║  ${nameString}║`);
    console.log(`  ║  ${scoreString}║`);
    console.log(`  ╚═════════════════════════════════════╝`);
  });

  console.log("🌟🌟🌟🌟🌟    선택된 템플릿    🌟🌟🌟🌟🌟");
  const selectedTemplate = scoredTemplates[0];

  const nameString = `name: '${selectedTemplate.name}'`.padEnd(35, " ");
  const scoreString = `score: ${selectedTemplate.score}`.padEnd(35, " ");
  console.log(`  ╔═════════════════════════════════════╗`);
  console.log(`  ║  ${nameString}║`);
  console.log(`  ║  ${scoreString}║`);
  console.log(`  ╚═════════════════════════════════════╝`);
}
