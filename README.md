# Search Demo

## Filtering

The tours are filtered by looking at tour name, description, country and destinations.
The filtering keywords are:

1.  the exact string
2.  each of the words with 3 or more characters

## Sorting

Sorting by price takes into consideration some currency conversion (hardcoded)

## Lazy loading

The results are under lazy loading. The component representing one results item (Tour) is loaded when in viewport.

## Fetch actions

Under the Flux Standard Action convention, all three actions related to a fetch (request, success, failure) must bear the same action type.

If the action has no payload, it is a request action. Any request data must be carried in the meta field.

If the action has the error flag set, it is an error action. Its payload is of type Error.

Otherwise, it is of type success and the payload carries the fetch response.
