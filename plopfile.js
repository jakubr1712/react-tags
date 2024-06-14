module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Create a reusable component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name:",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "plop-templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/index.tsx",
        templateFile: "plop-templates/index.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/models.d.ts",
        templateFile: "plop-templates/models.hbs",
      },
      {
        type: "add",
        path: "src/components/{{pascalCase name}}/__tests__/{{pascalCase name}}.test.tsx",
        templateFile: "plop-templates/Component.test.tsx.hbs",
      },
    ],
  });
};
