# One Stop Song Shop

This project is organized into 3 components:

## App

This is the root component which passes the song data and images to the FilteredList component

## FilteredList

This component handles all the filtering and sorting methods and renders these options as part of a dropdown menu to the user. It also passes the filtered/sorted songs to the DisplayList component to generate the html cards for each song.

## DisplayList

This component renders the filtered cards and handles the logic for adding and removing songs to the "My Songs" section. It also includes logic for the aggregation of price for all songs currently added. Finally, it counts the number of songs that match the user's filtering preferences and renders this just above the song cards.

# Data

Data is passed from the App component to FilteredList which handles the filtering and sorting and then to DisplayList which handles the aggregator

# How user can trigger state changes

There are intuitive dropdown menus for the sorting and filtering options along with buttons at the bottom of each song card that allow users to add a song to the aggregator (My Songs section)
