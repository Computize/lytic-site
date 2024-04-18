---
slug: dirt-data-2
title: Dirty Data Part 2 - Data Quality Techniques
publishDate: April 15,2021
category: Analytics, B.I.
previewText: “An ounce of prevention is worth a pound of cure,” said Ben Franklin. Second of my two-part look at winning against dirty data, I'll apply this idea to your data quality and data hygiene efforts.
---

For data warehousing projects involving a handful or more data sources, data is likely to not be ready as-is and where it lives for the reporting that the business requires. Depending on whom you ask, expect it to take 60-80% of a business intelligence/analytics project just to prepare the data, either for export or for reporting.

In Part One of this pair of articles, Don't Get Caught With Dirty Data, I covered more broadly-based themes of how to involve more of your organization in your efforts to spare your BI projects from excessive data hygiene work. In this installment, I’ll speak more to techniques that the technical stewards of your data can use to keep the undesirable data out of your BI stream to begin with.

**Data Auditing**

Reasonably standard stuff, but now with storage space so cheap, on databases of all sizes there’s little reason not to store the user, application, and date & time of every single change that’s ever made to every record. This makes the detective work a lot easier later when you try to identify consistent sources of lower-quality data and then use that to improve your data standards.

**Step Up Your Delimiter Game**

I know it’s called a “Comma Separated Values” file, but please stop using commas as a delimiter for your text files. Admit it- you do that only in the _hope_ that there won’t be commas in the data itself. The 40 records you’ve eyeballed seem clean, so you make that assumption about the other 2.5 million rows you have to ingest into another system. I’m calling you out, ugly “Comments” or “Description” fields! Between those and address fields (among others) you’re highly likely to have data in your ETL pipeline that contain commas as part of the data.

By my rough count, 99% of humans have no use for the pipe symbol “|” in any data they’d enter, whereas every ETL tool recognizes it as a potential delimiter. Using it has become the most valuable characteristic of any text file of data that we’ve dropped into a data lake or data warehouse.

**For Big Data – Schema Versioning**

One of the significant advantages of using a Big Data product as a backend (MongoDB, Hadoop, Cassandra, CouchDB…) is the flexibility it gives developers to change the fields being stored by an application at a moment’s notice, so both the application and db can adapt quickly to changes in tracking and business needs. But you then end up with large quantities of data accommodating one understanding mixed in with other data with different schemas representing different understandings of the same business objects. Your ETL jobs won’t spot that, nor know what to do with it.

I spotted a nice MongoDB article about the Schema Versioning design practice, where every document (record) gets tagged with the version number of the current data schema, distinguishing it from the schema older documents used. This makes it much easier to create ETL import pipelines with logic built-in to find, replace, or fill in values from older generations of business requirements, simply by including schema versions in your querying logic.

**Sidestepping the Excel databases**

I get uneasy every time I face an Excel database as I prepare an ETL/ELT pipeline, remembering how much time I’ve spent over the years trying to coax its date formats, strings, and unicode data into any destination. My solution is to export it into a plain vanilla delimited text file ASAP, and then customize the rest of the pipeline from there. You end up effectively moving to an ELT approach instead of ETL. In doing so you’ll bypass all the headaches.

**Regular Scrubbing of External Data**

Data warehouses and dashboards often benefit from connecting in-house data to tables from external 3rd-party sources. Those 3rd party sources often don’t care about what your own in-house data looks like, so you may have data hygiene to do to match them up. For our own customers we’ve often set up internal copies of external data, with regularly-scheduled refreshes against new batches, and then made that friendlier data into lookup tables available our client’s users.

**Standardize Data Entry Expectations**

This will be better received if the whole if the organization has declared or tried to establish itself as “Data-Driven”. The leaders driving that effort should establish the standards for things like data types, preventing duplicates, Master Data (like abbreviations, names of vendors and customers, internal business entities, etc.), single sources of company-wide lookup tables, etc. The goal is an organization-wide elimination of duplicated data.

In the same way that your organization might have standards for the size and placement of your logo on documents, common pieces of data should have published, known company standards with regular refresher training and occasional auditing. Left unchecked, inconsistent data types, use of ID numbers, and storage of names and places WILL get out of control.

**Identify Data Stewards**

Pick someone to be in charge of the above, and empower them with the authority to implement the standardizations.

**Data Quality tools**

Or, use software to do that for you.

There’s a host of off-the-shelf products out there to profile data, do proactive rule enforcement across multiple tools, and manage and report on exceptions to those rules. Many will integrate directly with different database and big data products. Informatica, SAS, Data360, Talend, and many more are worth a look for keeping a watchful eye for dirty data automatically.

Gartner even has a Magic Quadrant for Data Quality Solutions. You’ll see it in this article from AltexSoft, as well as a pretty thorough beginner’s guide to what DQM tools do.

**Contact Info Verification**

I’ve had my share of meetings and days spent just on managing the reliability of phone numbers, unfortunately as an afterthought, as reporting is being planned. This relates mostly to marketing use cases, where accurate email addresses, phone numbers, and addresses are the entire value proposition of storing contact data. So validating ALL of it should be part of your systems design. Look into platforms **Xverify**, **QuickEmailVerification**, and **Loquate**, to make it particularly hard for your users, customers, or site visitors to enter garbage. These are real-time address verification APIs that can be embedded into your online forms.

The truth and reliability of your data leads directly to insights that help propel forward your business or your cause. So be sure to invest in it.
