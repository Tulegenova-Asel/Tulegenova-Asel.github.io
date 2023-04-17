package main

import (
    "fmt"
    "sort"
)

func main() {
    // Define a list of integers
    list := []int{2, 4, 6, 8, 10}

    // Sort the list
    sort.Ints(list)

    // Calculate the median value
    var median int
    if len(list)%2 == 0 {
        median = (list[len(list)/2-1] + list[len(list)/2]) / 2
    } else {
        median = list[len(list)/2]
    }

    // Print the median value
    fmt.Printf("Median: %d\n", median)
}
