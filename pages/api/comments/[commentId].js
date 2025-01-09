const handler = async (req, res) => {
  const commentId = req.query.commentId;

  if (req.method === "POST") {
    const recievedComment = req.body;
    const { email, text, name } = recievedComment;

    if (
      !email ||
      !email.includes("@") ||
      !text ||
      text.trim === "" ||
      !name ||
      name.trim === ""
    ) {
      res.status(422).json({ message: "Invalid Inputs" });
      return;
    }
    const convertedComment = {
      id: new Date().toISOString(),
      author: name,
      comment: text,
    };
    fetch(
      `https://eventsdb-8934a-default-rtdb.firebaseio.com/events/${commentId}/comments.json`,
      {
        method: "POST",
        body: JSON.stringify(convertedComment),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    res.status(201).json({
      message: "Comment added Successfully !",
      comment: recievedComment,
    });
  }
  if (req.method === "GET") {
    let data;
    try {
      const response = await fetch(
        `https://eventsdb-8934a-default-rtdb.firebaseio.com/events/${commentId}/comments.json`
      );
      data = await response.json();
      // console.log("ssssss", data);
    } catch (error) {
      // console.log(error);
    }
    if (data) {
      const commentList = [];

      for (const key in data) {
        commentList.push({
          id: key,
          ...data[key],
        });
      }
      // console.log(commentList);
      res.status(200).json({ comments: commentList });
    }
  }
};

export default handler;
