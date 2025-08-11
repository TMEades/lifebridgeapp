import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kbxuwiaawvxlpkjzdfcf.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtieHV3aWFhd3Z4bHBranpkZmNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyNjMwMjYsImV4cCI6MjA2OTgzOTAyNn0.BggxYVetFVzi4JnpAhO3ZxOLzWjwCYK21IV2N5g9VdE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);