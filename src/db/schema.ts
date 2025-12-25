import { sql } from "drizzle-orm";
import { integer, pgTable, real, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";





type Data = {
  id: string;
  title: string;
  amount: number;
};

export const users = pgTable("users", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  username: varchar("name").notNull(),
  email: text("email").unique().notNull(),
  password: text("password").notNull(),
  salt: text().notNull(),
  role: text("role", { enum: ["admin", "user"] })
    .notNull()
    .default("user"),
  container: integer("container").default(0),
  wallet: real("wallet").default(0.0),
  transactions: text("transactions")
    .$type<Data[]>()
    .default(sql`'[]'`),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export const sessions = pgTable("sessions", {
  id: text("id").primaryKey(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  userRole: text("role").notNull(),
  expiration: timestamp("expire", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export const packages = pgTable("packages", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  title: text("title").notNull(),
  description: text("description").notNull(),
  minInvestment: integer("min_investment").notNull(),
  noteone: text("note_one"),
  notetwo: text("note_two"),
  notethree: text("note_three"),
  notefour: text("note_four"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export const transactions = pgTable("transactions", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  title: text("title", {
    enum: ["deposit", "withdrawal", "investment"],
  }).notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  amount: integer("amount").notNull(),
  status: text("status", { enum: ["pending", "approved", "failed"] }).default(
    "pending"
  ),
  type: text("type", { enum: ["withdrawal", "deposit", "investment"] }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp('updated_at')
    .notNull()
    .$onUpdate(() => new Date()),
});


export const notifications = pgTable("notifications", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: varchar("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  actionType: varchar("action_type", {length: 50}).notNull(),
  status: varchar("status", { length: 20 }).default(
    "unread"
  ),
  message: text("message").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

// export const sessionsRelations = relations(sessions, ({ one }) => ({
//   user: one(users, {
//     fields: [sessions.userId],
//     references: [users.id]
//       })
// }))

// export const usersRelations = relations(users, ({ one }) => ({
//   user: one(users, {
//     fields: [sessions.userId],
//     references: [users.id]
//       })
//     }))

export type User = typeof users.$inferSelect;
export type Packages = typeof packages.$inferSelect;
export type Session = typeof sessions.$inferSelect;