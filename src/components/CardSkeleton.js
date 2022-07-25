import React from 'react'
import ContentLoader from 'react-content-loader'

const UserReviewSkype = props => {
  return (
    <ContentLoader
      width={1366}
      height={700}
      viewBox="0 0 560 280"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      {/* Row 1 */}
      <rect x="15" y="115" rx="4" ry="4" width="113" height="14" />
      <rect x="15" y="95" rx="4" ry="4" width="82" height="13" />
      <rect x="15" y="4" rx="4" ry="4" width="150" height="78" />

      
      <rect x="190" y="115" rx="4" ry="4" width="113" height="14" />
      <rect x="190" y="95" rx="4" ry="4" width="82" height="13" />
      <rect x="190" y="4" rx="4" ry="4" width="150" height="78" />

      
      <rect x="360" y="115" rx="4" ry="4" width="113" height="14" />
      <rect x="360" y="95" rx="4" ry="4" width="82" height="13" />
      <rect x="360" y="4" rx="4" ry="4" width="150" height="78" />

      {/* Row 2 */}
      <rect x="15" y="266" rx="4" ry="4" width="113" height="14" />
      <rect x="15" y="246" rx="4" ry="4" width="82" height="13" />
      <rect x="15" y="155" rx="4" ry="4" width="150" height="78" />

      
      <rect x="190" y="266" rx="4" ry="4" width="113" height="14" />
      <rect x="190" y="246" rx="4" ry="4" width="82" height="13" />
      <rect x="190" y="155" rx="4" ry="4" width="150" height="78" />

      
      <rect x="360" y="266" rx="4" ry="4" width="113" height="14" />
      <rect x="360" y="246" rx="4" ry="4" width="82" height="13" />
      <rect x="360" y="155" rx="4" ry="4" width="150" height="78" />
    </ContentLoader>
  )
}

UserReviewSkype.metadata = {
  name: 'Pushp Vashisht',
  github: 'pushp1997',
  description: 'A User Review with Skype like user image.',
  filename: 'UserReviewSkype',
}

export default UserReviewSkype