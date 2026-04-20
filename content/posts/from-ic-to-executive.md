---
title: "From IC to Executive: Staying Technical Without Coding Every Day"
date: "2024-08-28"
excerpt: "The transition from principal engineer to VP is one of the hardest identity shifts in tech. Here's how I kept my technical edge while learning to lead at scale."
category: "Leadership"
readTime: "6 min read"
featured: true
---

When I left my staff engineer role at Google to become a head of engineering at a startup, my manager said something I've thought about almost every week since: "Your job is no longer to be right. It's to make the people who are right more effective."

I nodded. I had no idea what he meant.

## The Identity Trap

The trap most senior ICs fall into when they move into management is optimizing for looking technical rather than *being* technically effective. They go deep on code reviews to prove they still understand the stack. They jump into architectural debates to signal credibility. They privately judge decisions that differ from what they would have done.

I did all of these. They were mostly bad for my teams.

The fundamental confusion is this: technical credibility in an IC context means *your output is technically excellent*. Technical credibility in an executive context means *your teams' outputs are technically excellent, and you can tell the difference.*

These are different skills.

## What I Actually Do Instead of Coding

I get this question at every conference: "Do you still code?" I stopped writing production code around 2020. Here's what I do instead.

**Deep technical reading, weekly.** I spend 3-4 hours a week reading papers, RFC drafts, incident post-mortems (from my org and publicly available ones), and architecture docs. This isn't passive — I take notes, ask questions, and schedule 1:1s when I want to understand something better.

**Architecture review, not rubber-stamping.** I'm in every major architecture review, but my job is to ask the questions junior engineers are too afraid to ask: "What happens if this service is down for 20 minutes?" "Have we talked to the security team about this pattern?" "What's the rollback plan?"

**System-level incident retrospectives.** I attend post-mortems for every P1/P2 incident. I'm not there to assign blame — I'm there to understand system-level patterns. After the 4th incident involving a shared configuration service, I was the one who could see the pattern and make the call to rebuild it.

**Staying in the compiler's mindset.** I prototype solutions to ambiguous problems — not to ship them, but to understand them. When we were evaluating whether to migrate to a new messaging broker, I spent a weekend building a toy implementation of our hottest read path. I didn't write a line of that implementation into production. But I understood the tradeoffs well enough to ask the right questions.

## The Credibility You Actually Need

Engineers will follow a technical executive who:

1. Asks questions that show they understand what's hard
2. Protects the team from scope creep and bad technical decisions from above
3. Makes calls quickly when trade-offs are clear
4. Admits when they don't know something and follows up

They will not follow one who:
- Insists their ten-year-old architectural preferences are still relevant
- Can't distinguish between "I don't understand this" and "this is wrong"
- Makes technical decisions for political reasons and dresses them up as engineering judgment

The transition from IC to executive isn't about staying technical. It's about developing a different kind of technical intelligence — one that operates at system level, across teams, over longer time horizons.

That took me about three years to fully internalize. I hope this gives you a head start.
