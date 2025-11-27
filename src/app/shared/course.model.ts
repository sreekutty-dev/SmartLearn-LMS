export interface CourseListResponse {
  status: string;
  code: number;
  data: CourseListData;
}

export interface CourseListData {
  count: number;
  next: string | null;
  previous: string | null;
  results: Course[];
}

export interface Course {
  uid: string;
  course_thumbnail: string | null;
  course_documents: any[];
  is_course_owner: boolean;
  course_reviews: Review[];
  average_rating: number;
  lecture_count: number;
  is_bookmarked: boolean;
  is_completed: boolean | null;
  course_name: string;
  course_author: string;
  course_language: string;
  course_duration: number;
  course_price: number | null;
  course_offer_price: number | null;
  course_currency: string | null;
  course_description: string;
  is_published: boolean;
  course_published_date: string | null;
  course_created_date: string;
  course_updated_date: string;
  is_public: boolean;
  user: CourseUser;
  course_category: CourseCategory;
  course_subcategory: CourseSubcategory | null;
}

export interface Review {
  id: number;
  rating: number;
  review_title: string;
  review_body: string;
  created_date: string;
  updated_date: string;
  user: string;
  course: string;
}

export interface CourseUser {
  uid: string;
  phone_number: string;
  gender: number;
  date_of_birth: string;
  profession: string;
  profile_image: string | null;
  is_active: boolean;
  created_date: string;
  updated_date: string;
  calendar_consent: boolean;
  is_email_verified: boolean;
  otp_hash: string;
  otp_created_at: string;
  user: number;
  role: number;
  nationality: number;
  address: string | null;
  categories: number[];
}

export interface CourseCategory {
  id: number;
  category_name: string;
  category_description: string;
  created_date: string;
  updated_date: string;
}

export interface CourseSubcategory {
  id: number;
  // If more fields exist, add here
}
