// sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

export default defineConfig({
	name: "project-name",
	title: "Project Name",
	projectId: "tsbiqnoe",
	dataset: "production",
	plugins: [structureTool()],
	schema: {
		types: [
			{
				name: "resident",
				title: "Resident",
				type: "document",
				fields: [
					{
						name: "title",
						type: "string",
					},

					{
						name: "excerpt",
						type: "text",
					},
					{
						name: "slug",
						type: "slug",
						options: { source: "title" },
					},
					{
						name: "startDate",
						type: "datetime",
						initialValue: () => new Date().toISOString(),
						validation: (rule) => rule.required(),
					},
					{
						name: "image",
						type: "image",
					},
					{
						name: "body",
						type: "array",
						of: [{ type: "block" }],
					},
					{
						name: "website",
						type: "url",
					},
					{
						name: "instagram",
						type: "url",
					},
					{
						name: "linkedIn",
						type: "url",
					},
					{
						name: "facebook",
						type: "url",
					},
				],
			},
		],
	},
});
