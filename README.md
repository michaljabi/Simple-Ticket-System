# Simple-Ticket-System

A Full Stack project made to present:

- From business point of view:
    - power of usage Use-Cases and User-Stories for Modeling process
    - SPA which fits with other web applications. Here it will be a mock ACME selling platform 
- From technical point of view:
    - Front-end
        - React
        - Redux
        - Bootstrap
    - Back-end
        - Node
        - Express
        - PostgreSQL

> **STS** - will stand for **Simple Ticket System** (Project name abbreviation)

## Objective

Finally I am going to end up with full featured application which can bring a business value!

## The Story

For starters we need to prepare the `Environment`. 
This will be some kind of a "place" where our End Client and Software will perform some actions.
Then - it will be time for `My APP` so it will be time to use STS !

For modeling purposes - we need a glossary, to keep in mind "what is what" and "who is who".
 
### Glossary


`Entry Point` or `Selling Platform` - this is a MOCK entry point of our application. Simple view in which the `Worker` can request a ticket
  for handling the problem with *Selling Platform*   
`ACME` - Company that bought the *Selling Platform* to sell their goods.  
`ACME Worker` or `Worker` - The Guy who will generate the `Ticket` to handle by `SP Team`.   
`BReporter` or `Bug Reporter` - In our case it is a Worker. But looking up from *STS* Perspective, Worker does not exist. But there is more 'abstract' Person : Someone Who Reports Problems : so in our case: `BReporter`.  
`Help desk team` or `Selling Platform Team` (abbr. `SP Team`) - Team of `Supporters` and `Developers` which delivers the *Selling Platform* 
   to *ACME* and handle the bugs inside this app.  
`Supporter` - Person who will handle ticket using the `STS` and decide about its future.  
`Developer` - Person who will perform action and decide when `Ticket` is `Resolved` but only if *Supporter* cannot help alone.  
`nasty bug` - The thing inside *Entry Point* discovered by the *Worker*. Basically this will be a `Ticket description`   
`Ticket` - Generated issue inside the *STS* which will have its one life-cycle. Tickets can be `Resolved` or `Unresolved`    
`Simple Ticket System` or `STS` - From *SP Team* perspective it is a 3rd party application which help them handle requested tickets.  
`Environment` - That will be "all of those above bounded together" so it is the linked *STS* on *Selling Platform* to manage by *SP Team*.   
  
Those therms will help us to understand the Stories, and there are crucial for making a good model.

### Problem

While performing some obvious sell platform action, 
`Worker` discovered some `nasty bug` now he need to report it by using `STS`. 
That will inform `Help desk team` something is going on. 
`Supporter` will be informed about the `bug` and after log in to the `STS` panel - 
perform some actions to resolve the `nasty bug` and close the generated `ticket`...
 
 
