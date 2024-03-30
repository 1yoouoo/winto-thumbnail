export function printTemplate(
  weightedTemplates: any[],
  selectedTemplateComponent: any
) {
  console.log("🌠🌠🌠🌠🌠 가중된 템플릿과 확률 🌠🌠🌠🌠🌠");

  weightedTemplates.forEach((template) => {
    const nameString = `이름: '${template.name}'`.padEnd(53, " ");
    const scoreString = `점수: ${template.score}`.padEnd(53, " ");
    const probabilityString = `확률: ${(template.probability * 100).toFixed(
      2
    )}%`.padEnd(53, " ");

    console.log(`  ╔════════════════════════════════════════════════════════╗`);
    console.log(`  ║  ${nameString}║`);
    console.log(`  ║  ${scoreString}║`);
    console.log(`  ║  ${probabilityString}║`);
    console.log(`  ╚════════════════════════════════════════════════════════╝`);
  });

  console.log("\n🌟🌟🌟🌟🌟    선택된 템플릿    🌟🌟🌟🌟🌟");

  const selectedNameString = `선택된 템플릿 이름: '${
    selectedTemplateComponent?.name || "기본 템플릿 사용"
  }'`.padEnd(48, " ");
  console.log(`  ╔══════════════════════════════════════════════════════╗`);
  console.log(`  ║  ${selectedNameString}║`);
  console.log(`  ╚══════════════════════════════════════════════════════╝`);
}
