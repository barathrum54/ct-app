// store/profiles.ts
import { defineStore } from "pinia";

export interface Profile {
  // Continue using the existing Profile structure
  id: number;
  name: string;
}

interface ProfilesState {
  loading: boolean;
  defaultProfiles: Profile[];
  searchProfiles: Profile[];
  searchQuery?: string;
}

export const useProfilesStore = defineStore({
  id: "profiles",
  state: (): ProfilesState => ({
    loading: false,
    defaultProfiles: Array.from({ length: 6 }, (_, index) => ({
      id: index,
      name: `Profile ${index + 1}`, // Example default profile name
    })),
    searchProfiles: Array.from({ length: 1 }, (_, index) => ({
      id: index,
      name: `Search Profile ${index + 1}`, // Example search profile name
    })),
    searchQuery: "",
  }),
  getters: {
    // Define any getters here if needed in the future
  },
  actions: {
    // Action to handle profile search
    searchProfile(query: string) {
      this.loading = true;
      this.searchQuery = query;
      // Simulating an async search operation
      setTimeout(() => {
        // Mock search results, in a real app, replace this with actual data
        const searchResults = [
          {
            id: 100, // Mock ID
            name: `Searched: ${query}`, // Mock name based on the query
          },
          // Add more mock profiles if needed
        ];

        // Update the searchProfiles with the results
        this.searchProfiles = searchResults;
        // Set loading to false after the search is complete
        this.loading = false;
      }, 2000);
    },
  },
});
