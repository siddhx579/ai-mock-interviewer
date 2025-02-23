/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://neondb_owner:npg_IzchnAri08VR@ep-old-rice-a1c9ogs9.ap-southeast-1.aws.neon.tech/mockmate?sslmode=require',
    }
};