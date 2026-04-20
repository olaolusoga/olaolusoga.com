---
title: "Scaling Reliability: What 50M DAU Actually Teaches You"
date: "2024-05-14"
excerpt: "The hard-won lessons from scaling a platform to 50 million daily active users — what changes, what breaks, and what nobody writes about in architecture blogs."
category: "Engineering"
readTime: "10 min read"
featured: false
---

There's a gap between what architecture blogs say about scaling and what actually happens when you're responsible for a system used by 50 million people every day. This post is about that gap.

## The First Lesson: Your Mental Model Is Always Wrong

When we started the scaling journey at Apex, we had a fairly sophisticated mental model of our system. We'd done capacity planning. We had runbooks. We had SLOs.

We were still surprised. Constantly.

The first time we hit 10M DAU, a service we hadn't thought about — our internal feature flag evaluation system — became a bottleneck. It had been fine for years. At 10M it became the thing that made our p99 latency look like we'd forgotten to CDN our images.

At 20M, it was our cache invalidation strategy. We'd optimized for cache hit rate, not for the thundering herd problem that emerges when a viral event invalidates 40% of cache keys in 90 seconds.

The lesson isn't to model every edge case. It's to build a culture of *expected surprises* — teams who aren't demoralized when something unexpected happens, but who have fast feedback loops and decision-making frameworks for responding.

## SLOs as Organizational Infrastructure

SLOs stopped being a reliability tool and became an organizational alignment tool. Every heated debate about whether to ship a feature or pay down tech debt became: "What does our error budget say?"

This sounds simple. It isn't. You have to:
- Agree on what "availability" means for your product (not as obvious as it sounds)
- Allocate error budget across teams fairly
- Build the cultural and political will to actually *stop* shipping when you're over budget

That last one is where most organizations fail. You can have perfect SLO tooling and still ship through an exhausted error budget because leadership feels the release pressure. If your reliability program doesn't have teeth, it's theater.

## The 3am Problem

At scale, something is always broken. This is uncomfortable for organizations that think of incidents as failures. We had to reframe: incidents are *normal*. The question is whether you learn from them faster than the system grows.

We established a few practices that helped:

**Rotating on-call across leadership.** Every senior engineer and EM in my org spent at least one on-call rotation per year as a primary. Not to page them for everything, but to keep leadership grounded in the operational reality of the system.

**Blameless but not rootless.** "Blameless" doesn't mean "rootless." Every post-mortem had to identify a contributing cause that we could act on — not just "human error." Human error is always a symptom.

**The 5% reliability tax.** We protected 5% of every sprint's engineering capacity for reliability work that wasn't tied to any feature roadmap. Non-negotiable. Every quarter I had this conversation with the business, and every quarter I held the line.

## What Scale Reveals About Your Architecture

At 5M DAU, you can hide bad abstractions. At 50M, they find you.

The two most common failure modes I see at scale:

1. **Chatty service boundaries.** Microservices that make too many synchronous calls to each other become death by a thousand latency cuts. If your P50 latency is fine but P99 is 3x, look at your call graphs.

2. **Shared mutable state in unexpected places.** Feature flags, config systems, session stores — services that everyone reads from but nobody thinks about as a scaling risk. These are your next bottlenecks.

---

Scaling to 50M DAU didn't teach me to be a better architect. It taught me to be a better student of my own system — and to build teams that are curious rather than defensive when things break.

That mindset is more valuable than any architectural pattern.
