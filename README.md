# fund-freedom
A tool to combat wealth-based jailing through real-time visualization and donation


Socrata Open Data API Documentation:  
https://dev.socrata.com/foundry/data.ct.gov/bvbe-957i

CT Accused Pre-Trial Inmates SODA Endpoint:  
https://data.ct.gov/resource/bvbe-957i.json


#### Features in progress:
- D3 visualizations, to update in real-time in response to user filters and queries
- data to be filterable by felony and misdemeanor classes parsed out from offense detail
- donate buttons at the side of each row, to request earmarked donations
- current trends displayed with calls to action, based on recent analysis of inmate data
- integration of inmate data from additional US states
- mobile app powered by React Native or Firebase

#### Known bugs:
- queries return multiple days of results for the same inmate
- Paypal donate button disabled until linked to the CT Bail Fund correctly
