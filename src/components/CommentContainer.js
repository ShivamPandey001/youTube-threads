import React from "react";

const commentData = [
  {
    name: "Shivam Pandey",
    text: "Comments on the YoutubeThreadProject",
    replies: [
      {
        name: "Shivam Pandey",
        text: "Comments on the YoutubeThreadProject",
        replies: [
          {
            name: "Shivam Pandey",
            text: "Comments on the YoutubeThreadProject",
            replies: [
              {
                name: "Shivam Pandey",
                text: "Comments on the YoutubeThreadProject",
                replies: [
                  {
                    name: "Shivam Pandey",
                    text: "Comments on the YoutubeThreadProject",
                    replies: [],
                  },
                ],
              },
              {
                name: "Shivam Pandey",
                text: "Comments on the YoutubeThreadProject",
                replies: [
                  {
                    name: "Shivam Pandey",
                    text: "Comments on the YoutubeThreadProject",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Shivam Pandey",
        text: "Comments on the YoutubeThreadProject",
        replies: [
          {
            name: "Shivam Pandey",
            text: "Comments on the YoutubeThreadProject",
            replies: [],
          },
          {
            name: "Shivam Pandey",
            text: "Comments on the YoutubeThreadProject",
            replies: [
              {
                name: "Shivam Pandey",
                text: "Comments on the YoutubeThreadProject",
                replies: [],
              },
              {
                name: "Shivam Pandey",
                text: "Comments on the YoutubeThreadProject",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Shivam Pandey",
    text: "Comments on the YoutubeThreadProject",
    replies: [
      {
        name: "Shivam Pandey",
        text: "Comments on the YoutubeThreadProject",
        replies: [],
      },
      {
        name: "Shivam Pandey",
        text: "Comments on the YoutubeThreadProject",
        replies: [
          {
            name: "Shivam Pandey",
            text: "Comments on the YoutubeThreadProject",
            replies: [],
          },
          {
            name: "Shivam Pandey",
            text: "Comments on the YoutubeThreadProject",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Shivam Pandey",
    text: "Comments on the YoutubeThreadProject",
    replies: [
      {
        name: "Shivam Pandey",
        text: "Comments on the YoutubeThreadProject",
        replies: [],
      },
      {
        name: "Shivam Pandey",
        text: "Comments on the YoutubeThreadProject",
        replies: [
          {
            name: "Shivam Pandey",
            text: "Comments on the YoutubeThreadProject",
            replies: [],
          },
          {
            name: "Shivam Pandey",
            text: "Comments on the YoutubeThreadProject",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Shivam Pandey",
    text: "Comments on the YoutubeThreadProject",
    replies: [
      {
        name: "Shivam Pandey",
        text: "Comments on the YoutubeThreadProject",
        replies: [],
      },
      {
        name: "Shivam Pandey",
        text: "Comments on the YoutubeThreadProject",
        replies: [
          {
            name: "Shivam Pandey",
            text: "Comments on the YoutubeThreadProject",
            replies: [],
          },
          {
            name: "Shivam Pandey",
            text: "Comments on the YoutubeThreadProject",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Shivam Pandey",
    text: "Comments on the YoutubeThreadProject",
    replies: [
      {
        name: "Shivam Pandey",
        text: "Comments on the YoutubeThreadProject",
        replies: [],
      },
      {
        name: "Shivam Pandey",
        text: "Comments on the YoutubeThreadProject",
        replies: [
          {
            name: "Shivam Pandey",
            text: "Comments on the YoutubeThreadProject",
            replies: [],
          },
          {
            name: "Shivam Pandey",
            text: "Comments on the YoutubeThreadProject",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Shivam Pandey",
    text: "Comments on the YoutubeThreadProject",
    replies: [
      {
        name: "Shivam Pandey",
        text: "Comments on the YoutubeThreadProject",
        replies: [],
      },
      {
        name: "Shivam Pandey",
        text: "Comments on the YoutubeThreadProject",
        replies: [
          {
            name: "Shivam Pandey",
            text: "Comments on the YoutubeThreadProject",
            replies: [],
          },
          {
            name: "Shivam Pandey",
            text: "Comments on the YoutubeThreadProject",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Shivam Pandey",
    text: "Comments on the YoutubeThreadProject",
    replies: [
      {
        name: "Shivam Pandey",
        text: "Comments on the YoutubeThreadProject",
        replies: [],
      },
      {
        name: "Shivam Pandey",
        text: "Comments on the YoutubeThreadProject",
        replies: [
          {
            name: "Shivam Pandey",
            text: "Comments on the YoutubeThreadProject",
            replies: [],
          },
          {
            name: "Shivam Pandey",
            text: "Comments on the YoutubeThreadProject",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Shivam Pandey",
    text: "Comments on the YoutubeThreadProject",
    replies: [
      {
        name: "Shivam Pandey",
        text: "Comments on the YoutubeThreadProject",
        replies: [],
      },
      {
        name: "Shivam Pandey",
        text: "Comments on the YoutubeThreadProject",
        replies: [
          {
            name: "Shivam Pandey",
            text: "Comments on the YoutubeThreadProject",
            replies: [],
          },
          {
            name: "Shivam Pandey",
            text: "Comments on the YoutubeThreadProject",
            replies: [],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg w-[980px] my-2">
      <img
        className="w-12 h-12"
        alt="comment"
        src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  // don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="mx-8 border-l-4 border-black">
            <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold"> 1122 Comments:</h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentContainer;
