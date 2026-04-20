---
title: "A Practitioner's Guide to Technical Due Diligence"
date: "2023-10-05"
excerpt: "Having led technical DD on 12+ acquisitions, I've developed a framework for quickly assessing engineering organizations and codebases under time pressure."
category: "Strategy"
readTime: "9 min read"
featured: false
---

Technical due diligence is one of the most high-stakes things you can do as an engineering executive. You have limited time, incomplete information, and decisions worth tens or hundreds of millions of dollars depend on your judgment.

Here's the framework I've refined over 12+ M&A engagements.

## The Core Question

Technical DD is not primarily a code quality exercise. The core question is: **What is the cost and risk of inheriting this engineering organization and technology?**

That question has three sub-questions:
1. What will it cost to maintain and scale this system?
2. What are the hidden liabilities (technical debt, security issues, compliance gaps)?
3. What will it cost to integrate this team and technology into ours?

## The 5-Day Framework

**Day 1: Architecture and system overview**

Get a whiteboard session with the CTO and 2-3 senior engineers. Don't look at code yet. Understand the system conceptually: what are the main services, how do they communicate, where is data stored, what are the known scaling bottlenecks?

Red flags at this stage: an architecture that can't be explained simply, or an explanation that changes significantly depending on who you ask.

**Day 2: Code and repository analysis**

Now look at the code. Key signals:
- Test coverage percentage is less important than test *type* distribution. E2E-heavy with minimal unit tests tells a story about confidence in the domain model.
- Commit history density by author. Bus factor is real.
- Dependency age and security posture. Run a quick audit.
- The quality of the most recent code vs. the oldest code. Is it trending better or worse?

**Day 3: Operations and reliability**

Ask for 90 days of incident data. Every P1/P2 incident — not just the post-mortems, but the raw alerts, the timeline, the resolution. This tells you more than any architecture diagram.

Metrics to pay attention to:
- Mean time to detection (MTTD) vs. mean time to resolution (MTTR)
- Incident recurrence rate (same root cause happening twice is a cultural signal)
- On-call burden per engineer

**Day 4: Team and process**

This is the most underrated part of technical DD. Technology can be rewritten. Culture is much harder to change.

Talk to individual contributors without the CTO in the room. Ask: "What would you fix if you could fix one thing?" Their answer tells you about their culture and their candor. Ask: "What are you most proud of?" Their answer tells you about their engineering values.

**Day 5: Security and compliance**

Get a current vulnerability scan. Check for OWASP Top 10 basics. Understand their data model — where is PII, how is it handled, what are the data residency implications?

For regulated industries (fintech, healthcare), the compliance gap is often the largest hidden cost in an acquisition. I've seen deals where the compliance remediation cost more than the acquisition price.

## What the Report Should Say

A technical DD report that says "the code quality is average and there is some tech debt" is useless. What the acquiring team needs is:

1. **Specific, quantified risks.** "The payment processing service has no circuit breaker and represents a single point of failure. Estimated remediation: 6 engineer-weeks."

2. **Integration complexity estimate.** "Their data model uses a multi-tenant architecture incompatible with ours. Migration to a compatible model is likely 6-9 months of engineering effort."

3. **Talent risk.** "3 of their 5 senior engineers are on the founding team and have unvested equity. Retention package planning needed."

4. **Highest-confidence upside.** "Their ML recommendation engine is genuinely differentiated and could accelerate our roadmap by 12-18 months."

---

Technical due diligence done well is a competitive advantage for the acquirer. Done poorly, it's how you end up with a $50M surprise in your first post-acquisition engineering planning session.
