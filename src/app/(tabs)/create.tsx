import { ScrollView, StyleSheet, Text, View } from "react-native";

const POSTS = [
  {
    id: "1",
    user: "inkmaster_jay",
    avatar: "🧑‍🎨",
    time: "2m ago",
    content: "Just finished this geometric sleeve. 40 hours of work! 🖤",
    likes: 342,
    comments: 28,
  },
  {
    id: "2",
    user: "tattoo.by.luna",
    avatar: "👩‍🎨",
    time: "15m ago",
    content:
      "Watercolor roses are my absolute favorite style to work with. Every piece feels like painting on skin.",
    likes: 891,
    comments: 64,
  },
  {
    id: "3",
    user: "darkink_studio",
    avatar: "🎭",
    time: "1h ago",
    content:
      "Blackwork mandala done today. Client wanted something that would age beautifully. Mission accomplished ✅",
    likes: 1200,
    comments: 103,
  },
  {
    id: "4",
    user: "minimalist.marks",
    avatar: "✍️",
    time: "2h ago",
    content:
      "Less is more. Single needle fine line work is where my heart is. Swipe to see the detail 👉",
    likes: 567,
    comments: 45,
  },
  {
    id: "5",
    user: "neo_trad_nick",
    avatar: "🦅",
    time: "3h ago",
    content:
      "Neo-traditional eagle chest piece. Bold lines, rich colors. This one took 6 sessions over 3 months.",
    likes: 2100,
    comments: 189,
  },
  {
    id: "6",
    user: "script.queen",
    avatar: "🖊️",
    time: "5h ago",
    content:
      "Typography tattoos are underrated. Getting the lettering perfect is an art form in itself.",
    likes: 430,
    comments: 37,
  },
  {
    id: "7",
    user: "realism.rex",
    avatar: "🎨",
    time: "8h ago",
    content:
      "Portrait realism is the hardest and most rewarding style. Spent 12 hours on this lion piece today.",
    likes: 3400,
    comments: 278,
  },
];

export default function HomeScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentInsetAdjustmentBehavior="automatic"
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>For You</Text>
        <Text style={styles.headerSub}>Trending in your community</Text>
      </View>

      {/* Posts */}
      {POSTS.map((post) => (
        <View key={post.id} style={styles.card}>
          {/* User row */}
          <View style={styles.userRow}>
            <Text style={styles.avatar}>{post.avatar}</Text>
            <View>
              <Text style={styles.username}>@{post.user}</Text>
              <Text style={styles.time}>{post.time}</Text>
            </View>
          </View>

          {/* Image placeholder */}
          <View style={styles.imagePlaceholder}>
            <Text style={styles.imagePlaceholderText}>🖼️ Tattoo Photo</Text>
          </View>

          {/* Content */}
          <Text style={styles.content}>{post.content}</Text>

          {/* Actions */}
          <View style={styles.actions}>
            <Text style={styles.actionBtn}>❤️ {post.likes}</Text>
            <Text style={styles.actionBtn}>💬 {post.comments}</Text>
            <Text style={styles.actionBtn}>🔗 Share</Text>
          </View>
        </View>
      ))}

      <View style={styles.footer}>
        <Text style={styles.footerText}>You're all caught up 🎉</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a0a",
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#1a1a1a",
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#ffffff",
  },
  headerSub: {
    fontSize: 13,
    color: "#555",
    marginTop: 2,
  },
  card: {
    backgroundColor: "#111",
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#1e1e1e",
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 10,
  },
  avatar: {
    fontSize: 32,
    backgroundColor: "#1e1e1e",
    borderRadius: 20,
    padding: 4,
  },
  username: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
  time: {
    color: "#555",
    fontSize: 12,
    marginTop: 2,
  },
  imagePlaceholder: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  imagePlaceholderText: {
    color: "#444",
    fontSize: 16,
  },
  content: {
    color: "#ccc",
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 14,
  },
  actions: {
    flexDirection: "row",
    gap: 16,
    borderTopWidth: 1,
    borderTopColor: "#1e1e1e",
    paddingTop: 12,
  },
  actionBtn: {
    color: "#666",
    fontSize: 13,
    fontWeight: "600",
  },
  footer: {
    alignItems: "center",
    paddingVertical: 40,
  },
  footerText: {
    color: "#333",
    fontSize: 14,
  },
});
