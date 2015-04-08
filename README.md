# event-analysis

The question is. How can we evaluate our events? We have this incoming data from a variety of sources. 

- Can we score events? Can we give them a percentage/grade of some sort?

Can we ask our data questions like

- Given how many people we invited to the event, how many people RSVP'd, and how many people showed up - can we improve anything in our marketing?
  - If the ratio of people who invited people to the event was high compared to people who RSVP'd then it means that it's a smaller market, and now many people like this event. This clearly means we've to change something - or just suggests we're shooting for a smaller demographic. Also could mean the time isn't great! Also could mean that we've just invited the wrong people. All signs of pivot in marketing.
  - If the ratio of people who invited people to the event was fair compared to the people who RSVP'd then - that's positive. That means we've invited the right people.
  - There's many scenerios to think about here!
- How can we make the marketing better? What's been the best events for this particular intiative? 

NOW. How can be implement all this? We have most of the data - we just need to figure out how to grade it and boil it down into something that's understandable.

The aim here is to make a feedback loop for people to understand how they did. Right now we have events that our one-off because they don't give us feedback. People give us feedback - but not our metrics. People can think the speaker was great - oh well not many people showed up. But numbers don't lie!

####Data we have####

- Facebook Event
- API Checkins
- Twitter
- Talking to them/Feedback

####Process#

Pre-event

- Understand how many people have been to our event in the past
  - Achieved by looking at the IDs and trying to match them with the IDs in the API
    - Also helps us if we need to email out something rather than post it on Facebook.

During-event

- Manage to track how many Checkins are coming in. 
- Check how many people are live-tweeting about the event. Make it easy to view people who are tweeting @TechatNYU, or #{eventname}

Post-event

- Look at RSVP's on Facebook, Checkins, and how many people were new/returning.
- Look at breakdown of who came to the event, and what events have they been to in the past.
