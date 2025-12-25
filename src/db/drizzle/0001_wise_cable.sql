CREATE TABLE "notifications" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" varchar NOT NULL,
	"action_type" varchar(50) NOT NULL,
	"status" varchar(20) DEFAULT 'unread',
	"message" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;