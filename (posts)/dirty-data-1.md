---
slug: dirt-data-1
title: Don't Get Caught with Dirty Data (Part One)
publishDate: December 03,2020
category: Consulting
previewText: Your data warehouses have so many sources of unclean data. How do you PROACTIVELY handle data hygiene?
---

“64% of organizations say that inaccurate data is undermining their ability to provide an excellent customer experience.” – The Global Data Management Report

In the past two years we’ve had three clients now whose projects’ scope and cost swelled when we were surprised by how complicated it would get to ingest and match up the data components for their data warehouses. What everyone expected would be home-run business intelligence success got derailed by data types that wouldn’t line up between data sources, CSV files with far too many commas in unhelpful places, inconsistent unique identifiers from source to source, and plenty more all-too-typical data hygiene issues they’d been unaware of.

Clean data is key to reporting insights actually being insightful. Demand for new and related reports usually grows rapidly soon after decision-makers see their first batch of dashboards, and often changes on short notice. In a B.I. project you find that unclean or mismatched data is not kind to any spike in demand for insights, nor to your users’ ad-hoc business.

Part One of my data hygiene management suggestions here is meant as sort of a macro-level homework assignment to a business intelligence leader, to help you broadly forage for your dirty data before its impact is felt across too many BI & analytics endeavors. The discussion here is about timing and prioritization. Is your data hygiene happen PROACTIVELY, as early as possible, rather than REACTIVELY? Here are some tips on starting a proactive Data Hygiene Program:

**1. Inventory Your Data Input Points**

Data that’s key to your cross-operational unit data warehouse might be input through an interface with no validation enforced. How many of these do you have? We have Excel databases everywhere, and they’re usually not governed over like applications. How much are your dashboards depending on data that permanently lives in Excel or in untidy Access databases, not governed like other more “official” applications? Get this audited, and get your departments involved in the effort.

Have app owners/stewards help you identify the purpose of each of the data formats and datatypes, and have this all documented and analyzed.
Too many of these design decisions may have been based on outdated business conditions, and that has to be highlighted to all.

**2. Get Clarity on Management’s BI Goals**

To look ahead while you plan broader data hygiene practices, you should have all decision-makers who might order some reporting make a “Data Wish List” of data-driven questions they’d love to see answered. The answers probably lie in-house, but may be siloed within departments or management tiers. So these BI goals should be publicized to rally employees who can help provide related data and make the reporting complete.

**3. Compare #s 1 and 2**

Usually it won’t take much detailed documentation to tell, but do your current data entry point portfolio and management’s wish lists align? Over time you probably have gathered in-depth requirements for each application and database project individually, but have you looked at them all through the same “Big Picture” lens to evaluate whether their overall trajectory matches that of your decision-makers? All databases evolve, but you need to spot as early as possible when it’s time to push for design updates.

**4. New Project Alignment Check-In**

Honestly, I’m still working on a slicker name for this bit. I’ll trust that when you’re gathering requirements for a new system that you’ll verify its utility to its sponsors. But what about its overall relevance to the rest of the organization’s reporting needs? Recalling #2 above, you not only want to have a repository of themes critical to the general business intelligence effort, you also want to find every new project’s place in that context. How can the data from that project contribute to other business needs outside of it? If you’re hot for enterprise Agile, where project teams are necessarily cross-functional and cross-department, perhaps embed a representative of the BI side of the house into each project to ensure that data that should be shared and matched actually is.

**5. When is your data hygiene implemented (if at all)?**

If your data warehousing project has taken on sort of a sub-project of handling data hygiene, you have an issue at your data’s origins, and possibly throughout your organization. And then that issue might eventually touch more future efforts. Some of your data sources were never written for the analytics use case you’re currently trying to implement. So investigate whether this is a common pain point. Your end goal here is to implement either prevention of difficult data or some other cleaning of your data somewhere before its final storage.

**6. Who is Soiling Your Data?**

Is dirty data your vendor or customer’s fault for sending you an export from an antiquated legacy system? It’s worth contacting them to explore the options for setting the both of you up for success. Data formats, delimiters, file types, etc., are sometimes negotiable, and you need to just bother to ask for a change, as you may not be the only recipients trying to modernize.

Or are your own applications the culprit? Are your internal data entry apps enforcing the exact data formatting that your current reporting needs, and nothing else? It’s time to assign team members to investigate, identify, & document. There tend to be departments and projects that independently started to store data without having standards or leadership to guide them. Get them on-track.

**7. Find Master Data Opportunities**

Even something simple like limiting the occurrence of the same lookup tables in multiple relational databases can have a significant impact on your efforts to make data warehouse data consistent. Figure out what company data might be used by many (department names, cost center codes, professional ID numbers, etc.), and try to enforce a single org-wide source for it all.

**8. Whose business is Data Quality?**

Where exactly does the accountability lie? How will you make collection of only good data a widespread priority? The organization as a whole benefits when you delegate data stewardship to line-of-business employees and managers. With that it might be time to train or mentor departmental liaisons to IT on how to look out for opportunities for data consistency with company standards (which you should help to build) or with other related databases.

**9. Promote the Company’s Data Portfolio**

I often suggest to whoever’s heading BI at a client company to actively promote the databases the company houses. This is an active discouragement of data silo-ing, in favor of cross-functionality of all the company’s data. If you promote an environment of cross-functional users accessing your business intelligence, and basically inform your whole organization of what data is being kept, those users are far more likely to work together, look out for each other, and avoid re-inventing the wheel. You also allow departmental managers to have your back when making the case to a different IT group that it’s time to update the systems they use.

A lot of this is really to get ahead of your future data warehousing projects. All just ways of handling the data hygiene end of it before those projects ever even start. Be vigilant!
