import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cqblszrnbfoszngmbhjn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxYmxzenJuYmZvc3puZ21iaGpuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE0MzQwMzcsImV4cCI6MjA2NzAxMDAzN30.8feFldgwDbwMeu8GblDPg-7evsGau_jkx5rZ3W9sZXo';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
